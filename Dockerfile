# Use a slim Python image, preferably with a specific version for stability
FROM python:3.13-slim

# Set the working directory inside the container
WORKDIR /app

# Install Poetry
# We use a specific version of Poetry for reproducibility.
# You can find the latest version on Poetry's GitHub releases page.
ENV POETRY_VERSION=1.8.2
RUN pip install --no-cache-dir "poetry==$POETRY_VERSION"

# Add Poetry to the PATH
ENV PATH="/root/.local/bin:$PATH"

# Copy pyproject.toml and poetry.lock first to leverage Docker cache
# If these files don't change, Docker won't re-run the poetry install command.
COPY pyproject.toml poetry.lock ./

# Install dependencies using Poetry
# The '--no-root' flag prevents Poetry from installing the project itself as a package,
# which is often desired in a Docker image for a web application.
# The '--no-cache-dir' flag reduces image size by not storing pip's cache.
RUN poetry install --no-root --no-cache-dir

# Create a non-root user for security best practices
# --disabled-password and --gecos "" are for basic user creation without prompts
RUN adduser --disabled-password --gecos "" myuser && \
    chown -R myuser:myuser /app

# Copy the rest of your application code
COPY . .

# Switch to the non-root user
USER myuser

# Ensure that the non-root user's local bin directory is in the PATH
# This is where poetry might put executables for direct dependencies if installed in editable mode,
# or where `uvicorn` might be found if installed as a direct dependency.
ENV PATH="/home/myuser/.local/bin:$PATH"

# Command to run your application
# Assuming 'main:app' refers to your FastAPI/Flask application
# and $PORT is an environment variable set during container runtime or in a Kubernetes deployment.
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
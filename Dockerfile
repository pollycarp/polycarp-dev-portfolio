# ---- 1. Base image ----------------------------------------------------------
FROM python:3.10-slim

# ---- 2. Environment settings ------------------------------------------------
ENV PYTHONUNBUFFERED=1     # makes Python output straight to terminal
ENV PIP_NO_CACHE_DIR=1     # keeps the image small
ENV PORT=7860              # your app listens on this port inside the container

# ---- 3. Working directory ---------------------------------------------------
WORKDIR /app

# ---- 4. Install dependencies -----------------------------------------------
# Copy only requirements first so Docker can cache the install layer
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# ---- 5. Copy project code ---------------------------------------------------
COPY . .

# ---- 6. Expose the port & run the app --------------------------------------
EXPOSE 7860

# If your main file is app.py and it starts a Gradio (or FastAPI/Streamlit) server,
# this single command is enough. Adjust if your entry file or framework differs.
CMD ["python", "app.py"]

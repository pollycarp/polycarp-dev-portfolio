# ---- 1. Base image ----------------------------------------------------------
FROM python:3.10-slim

# ---- 2. Environment settings ------------------------------------------------
ENV PYTHONUNBUFFERED=1
ENV PIP_NO_CACHE_DIR=1
ENV PORT=7860

# ---- 3. Working directory ---------------------------------------------------
WORKDIR /app

# ---- 4. Install dependencies ------------------------------------------------
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# ---- 5. Copy project files --------------------------------------------------
COPY . .

# ---- 6. Expose the port & run the app ---------------------------------------
EXPOSE 7860

CMD ["python", "app.py"]





# DiseaseDetection

Web application for detecting **Brain Tumor** and **Tuberculosis** from Brain MRI scans and Chest X-rays using deep learning.

## Overview

This project uses two independently trained deep learning classifiers to screen medical imaging for signs of disease:

- **Brain Tumor Detection** — a ResNet-based classifier trained on brain MRI scans
- **Tuberculosis Detection** — a MobileNetV2-based classifier trained on chest X-rays

Both models are deployed in a lightweight web application built with HTML/CSS for the frontend and JavaScript for inference logic, allowing a user to upload a scan and get an instant prediction in the browser.

## Demo Video



🎥 [Watch the demo video](https://drive.google.com/file/d/1C4a_mXD8BuONEr_p0sAfaE8CRTPAhDM0/view?usp=sharing)

## How It Works

1. User uploads an MRI scan or chest X-ray image through the web interface
2. The image is preprocessed and passed to the relevant model (`brain.js` for tumor detection, `tb.js` for TB detection)
3. The model returns a prediction, which is displayed to the user

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Brain tumor classifier | ResNet |
| Tuberculosis classifier | MobileNetV2 |
| Frontend | HTML, CSS |
| Inference logic | JavaScript |

## Project Structure

\```
Disease-detection/
├── index.html          # Main application page
├── brain.js             # Brain tumor detection logic
├── tb.js                 # Tuberculosis detection logic
├── proj*.html            # Supporting pages
├── *.png / *.jpg / *.tif # Sample MRI and X-ray images for testing
└── README.md
\```

## Sample Data

The repository includes sample MRI and chest X-ray images (from public datasets such as TCGA) that can be used to test the application's predictions.

## Disclaimer

This project was built as an academic exercise and is **not intended for clinical or diagnostic use**. Predictions should not be used as a substitute for professional medical evaluation.

## Author

Brinda Udayakumar — built as part of a final year engineering project at SRM Easwari Engineering College, Chennai (Jan–Apr 2021). Published as *"Online Aid for Detecting Brain Tumor and Tuberculosis using Deep Learning"* in IEEE Xplore (Feb 2022).

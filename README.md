# 🌌 Vyuha: Ground Control Dashboard

> **"Vyuha doesn't just navigate physical spaces; it brings them instantly into the metaverse."**

<div align="center">
  <img src="Full 3D CAD Architectur.jpeg" alt="Full 3D CAD Architecture of the Vyuha bipedal robot" width="600"/>
</div>

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A production-grade, dark-themed telemetry and mission control dashboard for **Vyuha**, an AI-driven autonomous bipedal robot that digitizes physical environments into immersive VR. This interface was developed by team **MITIGATORS** for the **KPIT Sparkle (AI Systems)** innovation challenge.

## 🚀 About the Project

At Mitigators, our system Vyuha pairs an autonomous robot with an end-to-end spatial virtualization pipeline. Driven by torso-concentrated, high-torque brushless pancake motors and an intelligent dynamic balancing controller, the robot achieves compliant, human-like walking over stairs, ledges, and uneven terrain without human entry.

This React dashboard serves as the primary Ground Control Station (GCS) to monitor real-time robot kinematics, spatial SLAM acquisition, gait frequency tuning, and actuator health.

## 📑 Core Modules

The dashboard is structured into a dense, single-screen 5-page layout:

1. **Spatial Overview:** Monitors the end-to-end virtualization pipeline. Tracks Point Cloud Density, GPS-denied SLAM drift, and features live views of the Ortho-SLAM map, checkerboard simulation, and dual-lens VR twin.
2. **Gait Dynamics:** Comparative telemetry for bimodal locomotion control. Analyzes quasi-static continuous walking (0.5 Hz) for stable LiDAR scanning vs. dynamic jumping (1.3 Hz) for obstacle traversal.
3. **Trajectory & Velocity Tracking:** Real-time kinematic charting using Recharts. Visualizes X-Y foot trajectory interpolation, transient impulse body velocity responses, and multi-step PID limit-cycle tracking.
4. **Force Equilibrium:** Live impedance control monitoring. Features a virtual mass-spring-damper parameter tuner ($c_{virt}$, $b_{virt}$, $m_{virt}$) and a dynamic Center of Mass (CoM) / Zero Moment Point (ZMP) stability envelope.
5. **Actuator Architecture:** Hardware diagnostics. Displays a real-time 6-DOF joint state table (angles, torques, temperatures) and a breakdown of the proprietary Quasi-Direct Drive (QDD) planetary pancake actuators.

## 🛠️ Technology Stack

* **Frontend Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS (Custom KPIT Sparkle Purple/Vibrant Green on Carbon Black theme)
* **Icons:** Lucide React
* **Data Visualization:** Recharts
* **Typography:** Inter / Geist

# AVESHA'26 - National Level Technical Symposium Registration System

A production-ready registration system built for the Department of Electrical and Electronics Engineering's National Level Technical Symposium.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Database**: MongoDB Atlas with Mongoose
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **File Storage**: Cloudinary (with local fallback)
- **Data Export**: XLSX

## Features

- **Landing Page**: Modern, responsive hero section with event highlights and registration details.
- **Multi-Step Form**: Progress-tracked registration form with personal, college, event selection, and payment details.
- **Admin Dashboard**: Protected dashboard to view registrations, statistics, and export data to Excel.
- **Automated ID Generation**: Unique participant IDs (AVE26-XXXX) generated for each successful registration.
- **Responsive Design**: Mobile-first approach, fully responsive across all devices.

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas Connection String
- Cloudinary Account (Optional, recommended for production)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```env
   MONGODB_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Project Structure

- `src/app`: Application routes (Home, Register, Success, Admin, API)
- `src/components`: Reusable UI components (Navbar, StepForm, EventSelector, PaymentSection)
- `src/lib`: Database and external service configurations
- `src/models`: Mongoose schemas
- `src/utils`: Helper functions

## Deployment

This project is optimized for deployment on **Vercel**. Ensure all environment variables are added to the Vercel project settings.

---

Built with ❤️ for AVESHA'26

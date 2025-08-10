# Booking System

## Prerequisites
<ul>
    <li>Before starting, make sure you have the following installed:</li>
    <ul>
        <li><strong>Node.js</strong> (v18+ recommended) – <code>node -v</code></li>
        <li><strong>npm</strong> or <strong>yarn</strong> – <code>npm -v</code></li>
        <li><strong>PostgreSQL</strong> – <code>psql --version</code></li>
        <li><strong>Git</strong> – <code>git --version</code></li>
        <li><strong>pgAdmin</strong> (optional) for managing PostgreSQL visually</li>
    </ul>
</ul>

---

## Project Structure
<pre>
booking-system/
│── backend/     # Node.js + Express + PostgreSQL
│── frontend/    # React app
</pre>

---

## Installation

### 1. Clone the Repository
<pre>
git clone https://github.com/yourusername/booking-system.git
cd booking-system
</pre>

### 2. Backend Setup
<pre>
cd backend
npm install
</pre>

Create a `.env` file in the `backend/` folder:
<pre>
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=bookingdb
DB_PASS=your_password
DB_PORT=5432
</pre>

### 3. Frontend Setup
<pre>
cd ../frontend
npm install
</pre>

---

 
# LibManageDB

LibManageDB is a library management system designed for institutions to manage books, library staff, students, borrowing records, penalties, reservations, and more. This system provides efficient tracking and management of library operations with a relational database at its core.

## Project Overview

LibManageDB is developed to help institutions manage their library resources effectively. The database tracks users, books, reservations, penalties, and borrowing records, allowing institutions to streamline library processes.

## Database Entities

The database includes the following core entities:

- **User**: Represents users in the library system, including students and staff.
- **Book**: Tracks book information, such as title, author, publisher, and ISBN.
- **Library Staff**: Contains records of library staff who manage library operations.
- **Student**: Represents the students eligible to borrow books.
- **Borrow Record**: Stores information about book borrowing transactions, including borrow and return dates.
- **Penalty**: Manages penalties for late returns or damaged items.
- **Reservation**: Tracks book reservations.
- **Publisher**: Stores publisher information.
- **Author**: Stores author information.

## Getting Started

### Prerequisites

- **Database Server**: MySQL or PostgreSQL (compatible with other SQL databases).
- **Node.js**: For running scripts and server code if applicable.

### Database Setup

1. **Create the Database**:  
   In your SQL command line or client, run:
   ```sql
   CREATE DATABASE LibManageDB;


# this prohect is under Rukundo wilson's license 2024

---
title: Docs with VitePress
---

# Clients

The Clients section is a pivotal part of the Client System, dedicated to the analysis and management of client data. Here, you can access the 'Clients' tab, which lists all registered clients, providing a centralized view that facilitates efficient management and oversight.

<h4 style="font-size:14px; font-weight: 700;">On this page</h4>
<ul style="font-size:12px; font-weight: 500;">
            <li>
                <a href="#new-client">New Client</a>
                    <ul>
                        <li>
                            <a href="#data-synchronization">Data Synchronization</a>
                        </li>
                        <li>
                            <a href="#instant-profile-sync">Instant Profile Sync</a>
                        </li>
                    </ul>
            </li>
            <li>
                <a href="#client-filter">Client Filter</a>
            </li>
            <li>
                <a href="#client-index">Client Index</a>
            </li>
            <li>
                <a href="#rating">Rating</a>
            </li>
            <li>
                <a href="#client-profile">Client Profile</a>
            </li>
        </ul>

## New Client

New clients are continuously added to our system with varying frequencies based on the time of day:
From 7:00 AM to 10:30 PM: New clients are registered every minute, reflecting high activity periods during regular business hours.
From 10:30 PM to 7:00 AM: Registrations occur every five minutes, accommodating the reduced activity in the late-night hours.
This approach ensures that our system dynamically adjusts to the natural flow of client registrations, optimizing performance and resource utilization during different times.

### Data Synchronization

Full Client Stats Sync: Client statistics are fully synchronized every 15 minutes to ensure all data across the system is up-to-date. This frequent sync helps in maintaining the accuracy and timeliness of client information, which is crucial for operational efficiency and client management.
Non-Sync Periods: There is a pause in the full synchronization process from 11:30 PM to 5:00 AM. This pause is strategically placed during off-peak hours to reduce the load on our systems and perform necessary maintenance or backups without disrupting user access.
Last Sync: The last complete synchronization of client stats occurred 24 minutes ago. This timestamp helps system users understand the recency of the data they are viewing, ensuring they are aware of any potential delays in the information presented.

### Instant Profile Sync

Real-Time Sync on Access: When a user accesses a client's profile, that specific profile is immediately synchronized (indicated by a green loop). This instant sync ensures that users are looking at the most current and relevant information, regardless of the scheduled sync times. This feature is particularly useful for customer service and account management, where up-to-date information is critical for effective interaction and decision-making.

## Client Filter

The Client Filter feature allows users to search for specific clients or groups of clients based on various parameters such as: PIN, Name (First Name, Last Name), City/Postcode, Phone Number, Date of Birth (DOB), Password.

### Advanced Filters

For more refined searches, the Advanced Filters option offers additional parameters, including: Company, Lead, Affiliate, Account Manager, Rating, State etc

Users can enhance their search efficiency by creating and saving custom filter presets. To save a filter, name it after yourself, and it will appear on your client dashboard for easy future access. You can manage these presets—edit or delete them—via the filter presets menu.

This guide will further delve into each section, ensuring that you are well-equipped to utilize the Client System effectively to enhance client management and operational efficiency.

## Client Index

Client Index is the area where you can see highlights of the client details like PIN, Company, Client Rating, Lifetime Percentage, Lifetime Result, Balance, Last bet date, Warnings, account opened data and affiliate name or account manager name if any and other status.
Following Image lets you know more about the client index.

<img src="/assets/img/client-index.png" alt="Client-Index" style="height: auto; width:100%;"/>

<!-- ## Table of Contents

- [Page 2](page2.md)
- [Page 3](page3.md)

### Header 2

Some text

## Header 3 -->

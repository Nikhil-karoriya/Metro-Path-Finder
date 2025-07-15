# Metro Path Finder – Hyderabad Metro

**Metro Path Finder** is a web-based application that calculates the shortest route between two metro stations in Hyderabad using **Dijkstra's Algorithm**. Built with clean, responsive design principles, the app delivers a fast and intuitive user experience across devices.

---

## Live Demo

[Launch Website](https://nikhil-karoriya.github.io/Metro-Path-Finder/index.html)

---

## Preview

### Desktop View

| Home | Station List | Route Form | Route Result |
|------|--------------|------------|--------------|
| ![Home - Wide](docs/pics/show/full_home.jpeg) | ![Stations - Wide](docs/pics/show/full_stations.jpeg) | ![Form - Wide](docs/pics/show/full_form.jpeg) | ![Route - Wide](docs/pics/show/full_route.jpeg) |

### Mobile View

| Home | Station List | Route Form | Route Result |
|------|--------------|------------|--------------|
| ![Home - Mobile](docs/pics/show/mobile_home.png) | ![Stations - Mobile](docs/pics/show/mobile_stations.png) | ![Form - Mobile](docs/pics/show/mobile_fill.png) | ![Route - Mobile](docs/pics/show/mobile_route.png) |

The app delivers a consistent user experience across all screen sizes, using responsive cards and seamless transitions.

---

## Features

- Shortest path calculation using **Dijkstra's Algorithm**
- Coverage of **56 Hyderabad Metro stations**
- Fully **responsive interface** for mobile and desktop
- Dynamic **card-based visualization** of the route
- Toggleable interactive **metro map** view
- Real-time results without page reloads

---

## Tech Stack

- **HTML5** – Semantic structure and layout
- **CSS3** – Responsive design and custom styles
- **JavaScript (ES6)** – Logic, DOM manipulation, and graph algorithms
- **Bootstrap 5** – Layout utilities, forms, and components
- **Graph Algorithms** – Custom implementation of Dijkstra's algorithm

---

## How It Works

1. Metro stations are modeled as **nodes** in a weighted graph.
2. Connections between stations represent **edges with weights** (typically distance).
3. When the user submits a start and destination station, **Dijkstra’s Algorithm** computes the shortest path.
4. The result is dynamically rendered using station **cards and transitions**.

---

## Station Codes

Below is the list of all metro stations and their corresponding node numbers:


    Node number                                       Station Name
    
        1                                              LBnagar
        2                                              Victoria_memorial
        3                                              Chaitanyapuri
        4                                              Dilshukhnagar
        5                                              Moosrambagh
        6                                              New Market
        7                                              Malakpet
        8                                              MG BusStation
        9                                             Osmania_medical
        10                                             GandhiBhavan
        11                                             Assembly
        12                                             Lakdikapool
        13                                             Khairtabad
        14                                             Irrummanzil
        15                                             Panjagutta
        16                                             Ameerpet
        17                                             SRnagar
        18                                             ESIhospital
        20                                             Erragadda
        21                                             Bharatnagar
        22                                             Moosapet
        23                                             DR_BRambedkar
        24                                             Kukatpally
        25                                             KPHBcolony
        26                                             JNTUcollege
        27                                             Miyapur
        28                                             Sultanbazar
        29                                             Narayanguda
        30                                             Chikkadpali
        31                                             RTCxroads
        32                                             Musheerabad
        33                                             Gandhihospital
        34                                             SecundrabadWest
        35                                             Paradeground
        36                                             Nagole
        37                                             Uppal
        38                                             stadium
        39                                             NGRI
        40                                             Habsiguda
        41                                             Tarnaka
        42                                             Mettuguda
        43                                             SecuderabadeEast
        44                                             Paradise
        45                                             Rasoolpura
        46                                             PrakashNagar
        47                                             Begumpet
        48                                             MathuraNagar
        49                                             Yusufguda
        50                                             Jubliehills
        51                                             JH-checkpost
        52                                             Peddamagudi
        53                                             Madhapur
        54                                             Dugamcheruvu
        55                                             Hitechcity
        56                                             Raidurg

---

## Project Highlights

- Implements graph theory concepts in a real-world application
- Demonstrates JavaScript proficiency in DOM manipulation and logic structuring
- Clean, mobile-first UI built without relying heavily on third-party frameworks
- Focuses on performance, responsiveness, and usability

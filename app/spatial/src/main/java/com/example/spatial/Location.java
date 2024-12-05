package com.example.spatial;

import org.hibernate.annotations.Type;
import javax.persistence.*;
import org.locationtech.jts.geom.Point;


@Entity
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Type(type = "org.hibernate.spatial.GeometryType")
    private Point geom;

    // Getters and setters
}

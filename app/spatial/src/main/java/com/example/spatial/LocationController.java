package com.example.spatial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@RequestMapping("/api/locations")
public class LocationController {

    @Autowired
    private LocationRepository locationRepository;

    @PostMapping
    @Transactional
    public Location addLocation(@RequestBody Location location) {
        return locationRepository.save(location);
    }
}

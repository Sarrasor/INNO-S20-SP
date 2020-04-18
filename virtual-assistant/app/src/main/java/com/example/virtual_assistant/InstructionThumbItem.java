package com.example.virtual_assistant;

import android.graphics.Bitmap;

import com.google.protobuf.Timestamp;

public class InstructionThumbItem {
    private String id;
    private String name;
    private String description;
    private Bitmap image;
    private int stepCount;
    private int size;
    private Timestamp lastModified;

    public InstructionThumbItem(String id, String name, String description, Bitmap image, int stepCount, int size, Timestamp lastModified)
    {
        this.id = id;
        this.name = name;
        this.size = size;
        this.description = description;
        this.image = image;
        this.lastModified = lastModified;
        this.stepCount = stepCount;
    }

    public Timestamp getLastModified()
    {
        return this.lastModified;
    }

    public String getId() {
        return id;
    }

    public int getStepCount() {
        return stepCount;
    }

    public int getSize() {
        return size;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Bitmap getImage() {
        return image;
    }
}
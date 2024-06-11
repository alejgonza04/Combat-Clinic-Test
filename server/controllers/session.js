import express from 'express';
import mongoose from 'mongoose';

import SessionMessage from '../models/sessionMessage.js';

export const getSessions = async (req, res) => { 
    try {
        const sessionMessages = await SessionMessage.find();
                
        res.status(200).json(sessionMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSession = async (req, res) => { 
    const { id } = req.params;

    try {
        const session = await SessionMessage.findById(id);
        
        res.status(200).json(session);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addSession = async (req, res) => {
    const { sessionType, sessionLength, sparringTime, techniques, date } = req.body;

    const newSessionMessage = new SessionMessage({ sessionType, sessionLength, sparringTime, techniques, date })

    try {
        await newSessionMessage.save();

        res.status(201).json(newSessionMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

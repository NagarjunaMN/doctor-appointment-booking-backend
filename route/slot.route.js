const slotRoute = require('express').Router()
const { getSlots, getSingle, createSlot, updateSlot, deleteSlot } = require('../controller/slot.controller')
const { create } = require('../model/slot.model')

slotRoute.get(`/all`,getSlots)

slotRoute.get(`/single/:id`,getSingle)

slotRoute.post(`/create`,createSlot)

slotRoute.patch('/update/:id',updateSlot)

slotRoute.delete('/delete/:id',deleteSlot)

module.exports = slotRoute
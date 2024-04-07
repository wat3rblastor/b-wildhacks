"use client";

import React, { useState } from 'react';
import { createTask } from '../client/client';

const AddTaskPage = () => {
  // Initialize state for task details
  const [taskName, setTaskName] = useState('');
  const [address, setAddress] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  // Handler for updating task name
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  // Handler for updating address
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  // Handler for updating budget
  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  // Handler for updating duration
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  // Handler for updating description
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Handler for submitting the form (could be used for API calls to add task)
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(
      {
        // form input
        title: taskName,
        address: address,
        budget:  parseFloat(budget),
        duration: duration,
        description: description,

        // other task fields
        taskid: 1, // TODO: remove
        userid: 1,
        available: true,
        providerid: null,
        location: ''
      }
    )
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Add Task</h3>
        </div>
        <div className="border-t border-gray-200">
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:px-6">
            {/* Task Name */}
            <div className="mb-4">
              <label htmlFor="task-name" className="block text-sm font-medium text-gray-700">Task Name</label>
              <input
                type="text"
                id="task-name"
                name="task-name"
                value={taskName}
                onChange={handleTaskNameChange}
                className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleAddressChange}
                className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>

            {/* Budget */}
            <div className="mb-4">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={budget}
                onChange={handleBudgetChange}
                className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={duration}
                onChange={handleDurationChange}
                className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskPage;
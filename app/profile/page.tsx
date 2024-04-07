"use client";

import React, { useState } from 'react';
import Link from 'next/link'

const ProfilePage = () => {
  // Initialize state for profile information
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  // Handler for updating first name
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  // Handler for updating last name
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Handler for updating phone number
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handler for updating payment method
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handler for submitting the form (could be used for API calls to update data)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the updated profile information
    console.log('Updated Profile Information:', {
      firstName,
      lastName,
      phoneNumber,
      paymentMethod,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
        </div>
        <div className="border-t border-gray-200">
          <form onSubmit={handleSubmit}>
            <dl>
              {/* First Name */}
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">First Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </dd>
              </div>

              {/* Last Name */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Last Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </dd>
              </div>

              {/* Phone Number */}
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </dd>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  <input
                    type="text"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    className="border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </dd>
              </div>
            </dl>

            {/* Submit button */}
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
              <Link href="/">
                <button
                  type="submit"
                  className="ml-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log Out
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

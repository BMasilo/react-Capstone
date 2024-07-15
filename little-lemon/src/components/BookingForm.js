import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    }
    return (
        <div>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor='book-date'>Choose Date:</label>
                                <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                            </div>

                            {/* For time selection */}
                            <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                            </div>

                            {/* Booking Guests */}
                            <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' max='10' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                            </div>
                            <div>
                            <label htmlFor='book-occassion'>Choose Occassion:</label>
                            <select id='book-occassion' key={occassion} value={occassion} onChange={(e) => setOccassion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            </div>

                            <div className='btnReceive'>
                                <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>
        </div>
    );
};

export default BookingForm;
import React from 'react'

const Books= () => {
  return (
    <div id='books__body'>
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className='section__title books__header--title' >All Books</h2>
                            <select id="filter" defaultValue="DEFAULT">
                                <option value="DEFAULT" disabled>Short</option>
                                <option value="LOW_TO_HIGH">Price, Low to High</option>
                                <option value="High_TO_LOW">Price, High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Books
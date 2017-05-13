import React from 'react';
import SavingsList from '../containers/savings-list';
import Chart from '../containers/chart';
require('../../scss/style.scss');

const App = () => (
    <div className="container">
        <div className="nav">
            <SavingsList />
        </div>

        <div id="inner-flex-container">
            <header>
                <h1> Compounding Savings Motivator </h1>
            </header>
            <section>
                <Chart />
            </section>
        </div>

    </div>
);

export default App;

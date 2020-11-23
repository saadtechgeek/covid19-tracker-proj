import React, { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats';
import AllCountries from './AllCountries';

export default function InfoPanel({ currentState}) {
    console.log(currentState);
    if (currentState == 0)
        return <GlobalStats />
    else if (currentState == 1)
        return <AllCountries />

    else return <GlobalStats />

}

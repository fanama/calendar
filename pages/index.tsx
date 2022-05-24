import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Calendar } from '../components/Calendar';

const Home: NextPage = () => {
    return (
        <div className={styles.container + 'flex flex-col h-screen'}>
            <Calendar />
        </div>
    );
};

export default Home;

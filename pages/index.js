// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import First from '../components/First';
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Second_sec from '../components/Second_sec';
import card from '../components/cards/card';
import Card from '../components/Card';
import CardDetail from '../components/CardDetail';
import blog from './boxes';
import Blog from '../components/Blog';
import Available from '../components/Available';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Navbar />
      <First />
      <Second_sec />
      <Card />
      <CardDetail />
      <Available />


    </>
  )
}



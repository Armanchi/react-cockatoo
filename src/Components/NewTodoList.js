import React from 'react'
import styles from '../styles/NewTodoList.module.css';
import Footer from './Footer';
import { WanderingPet } from "react-wandering-pet";

const NewTodoList = () => {
  return (
    <>
    <div className={styles.intro}>
        <h1 className={styles.Title}>New List</h1>
    </div> 
    <div className={styles.ListText}>

      <p className={styles.listP}>Nothing to see here...</p>

    </div>
    <WanderingPet
      src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f321b49-5fa7-407b-aaa0-cca6992d3d7c/d5o2bsr-1336ebb8-1235-415d-b7ed-225f1b544e82.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmMzIxYjQ5LTVmYTctNDA3Yi1hYWEwLWNjYTY5OTJkM2Q3Y1wvZDVvMmJzci0xMzM2ZWJiOC0xMjM1LTQxNWQtYjdlZC0yMjVmMWI1NDRlODIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wM430A1Hzn-EQ8gJGzFcpqLRWZYmGegqg2msdPk-nHU' // Optional. Default is the orange cat GIF.
      height={200} // Default is 48px.
      width={200} // Default is auto
      className="catGif"
      heightOffset={100} // The hight of the GIF from the bottom of the screen. Default is -9px.
      maxLimitOffset={20} // When will the GIF reset and repeat offset from the right edge of the screen.
      movementInterval={50} // The number (milliseconds) at which will add movementOffset to the GIF to move it.
      movementOffset={0.8} // The number of pixels at which the GIF will move by for each interval.
      startingOffset={-150} // The offset at which the GIF starts from.
    />

    <Footer />
    </>
  )
}



export default NewTodoList;
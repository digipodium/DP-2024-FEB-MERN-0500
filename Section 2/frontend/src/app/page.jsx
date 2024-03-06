import React from 'react'

const Home = () => {

  const siteTitle = 'Digipodium';

  const num1 = 10;
  const num2 = 20;

  const myStyles = {
    textAlign: 'center',
  }

  const addNums = (a, b) => {
    return a + b;
  }

  return (
    <div>
      <h1 className='my-btn' style={myStyles}>
        {siteTitle}
      </h1>
      <h4>{num1 * num2}</h4>
      <p>{addNums(56, 29)}</p>
      <hr />

      <input type="text" />

      <h1 style={{ color: 'red', fontSize: '2rem' }}>My Next.js App</h1>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png" alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate excepturi maiores possimus labore. Veritatis necessitatibus accusantium eum illum molestiae explicabo.</p>
    </div>
  )
}

export default Home
import { use, useState } from 'react';
import Container from './Container';
import CountBox from './CountBox';
import AllCards from './AllCards';
import Carts from './Carts';


const Manages = ({ fetchPromise, resolved, setResolved }) => {

    const fetchData = use(fetchPromise)
    const [data, setData] = useState(fetchData)
    const [selectedCard, setSelectedCard] = useState([])
    const [count, setCount] = useState([])


    const removeCard = (c) => {
        const filterData = selectedCard.filter(singleCard => singleCard.id !== c.id)
        const dataFilter = data.filter(singleCard => singleCard.id !== c.id)

        setSelectedCard(filterData)
        setData(dataFilter)
    }

    return (
        <div>
            <Container>
                <CountBox count={count} resolved={resolved} selectedCard={selectedCard} ></CountBox>

                <h1 className='text-2xl font-bold ml-2 mb-5 mt-10 md:text-left text-center '>Customer Tickets</h1>
                <div className='grid md:grid-cols-4 grid-cols-1 mb-5 mx-2'>
                    <div className='grid md:grid-cols-2 grid-cols-1 col-span-3 h-fit gap-5 text-black'>
                        {
                            data.map(issues => {
                                return (
                                    <AllCards key={issues.id} resolved={resolved} count={count} setCount={setCount} setResolved={setResolved} selectedCard={selectedCard} setSelectedCard={setSelectedCard} data={data} setData={setData} issues={issues}></AllCards>

                                )
                            })
                        }
                    </div>

                    <Carts resolved={resolved} setResolved={setResolved} removeCard={removeCard} selectedCard={selectedCard}></Carts>
                </div>

            </Container>
        </div>
    );
};

export default Manages;
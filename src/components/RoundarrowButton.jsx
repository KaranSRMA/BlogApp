import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const RoundarrowButton = ({ route }) => {
    return (
        <Link to={route}>
            <Button variant="secondary" className="bg-yellow-300 cursor-pointer rounded-full flex items-center justify-center w-[3rem] h-[3rem] ml-auto">
                <img src="/svgs/arrowblack.svg" alt="arrow-black" className='w-full h-full' />
            </Button>
        </Link>
    )
}

export default RoundarrowButton

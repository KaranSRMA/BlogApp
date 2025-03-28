import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArrowupButton = ({ text, route }) => {
    return (
        <div>
            <Link to={route}>
                <Button
                    variant="secondary"
                    className="cursor-pointer text-gray-400 p-5 bg-black hover:bg-gray-900"
                >
                    {text}
                    <img src="/svgs/arrow.svg" alt="arrow" />
                </Button>
            </Link>
        </div>

    )
}

export default ArrowupButton

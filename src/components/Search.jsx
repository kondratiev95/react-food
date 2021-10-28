import { useState } from "react";

export const Search = ({cb = Function.prototype}) => {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return (
        <div className="row">
            <div className="search-field col s12">
                <input
                    id="search" 
                    type="search" 
                    value={value}
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={e => setValue(e.target.value)}
                />
                <button 
                    className="btn deep-purple lighten-3" 
                    onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    )
}
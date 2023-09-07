/**
 * React Component for a Custom table.
 * @param {[string]} headers - String Array for table's headers.
 * @param {object} data - An Object that contains the table's rows.
 * @returns {JSX.Element} - A JSX element representing a Table. 
 */
export default function TableChart ({headers,data}){
    /**
     * Tailwindcss styles.
     */
    const tableStyle = `border-spacing-0 text-white w-full`;
    const headerStyle = `pl-10 pt-10 pb-4 text-4xl w-1/3`;
    const cellStyle = `pl-10 pt-10 pb-4 text-xl w-1/3`;
    const rowStyle = 'odd:bg-boxback';
    /**
     * Round the values (2 decimals).
     */
    const redondear = (num) => Math.round(num*100)/100
    return(
        <table className={tableStyle}>
            <tbody>
            {/**
            * Generating the headers.
            */}
            <tr className='text-left bg-secondary'>
                {headers.map((cell, index) => (<th className={headerStyle} key={index}>
                    {cell}
                </th>))}
            </tr>
            {/**
            * Generating the rows.
            */}
            {data.map((row, index) => 
            (<tr className={rowStyle} key={index}>
                {Object.values(row).map((d,i) => (<td className={cellStyle} key={i}>{isNaN(d)? d:redondear(d)}</td>))}
            </tr>))}
            </tbody>
        </table>
    );
}
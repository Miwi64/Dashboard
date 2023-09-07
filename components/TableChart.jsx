export default function TableChart ({headers,data}){
    const tableStyle = `border-spacing-0 text-white w-full`;
    const headerStyle = `pl-10 pt-10 pb-4 text-4xl w-1/3`;
    const cellStyle = `pl-10 pt-10 pb-4 text-xl w-1/3`;
    const rowStyle = 'odd:bg-boxback';
    const redondear = (num) => Math.round(num*100)/100
    return(
        <table className={tableStyle}>
            <tr className='text-left bg-secondary'>
                {headers.map((cell, index) => (<th className={headerStyle} key={index}>
                    {cell}
                </th>))}
            </tr>
            {data.map((row, index) => 
            (<tr className={rowStyle} key={index}>
                {Object.values(row).map((d,i) => (<td className={cellStyle} key={i}>{isNaN(d)? d:redondear(d)}</td>))}
            </tr>))}
        </table>
    );
}
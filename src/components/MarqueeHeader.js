const stockInfo = [
    {
      bank_name: 'Nifty Bank',
      value: '4,22,334',
      percent: '31.32'
    }, {
      bank_name: 'HDFC Bank',
      value: '4,220',
      percent: '3.2'
    }, {
      bank_name: 'State Bank of India',
      value: '2,334',
      percent: '1.3'
    }, {
      bank_name: 'Indigo',
      value: '7,22,334',
      percent: '1.32'
    }, {
      bank_name: 'Tata',
      value: '22,334',
      percent: '10.5'
    },
]
export default function MarqueeHeader(){

    return (
        <marquee className={'bg-black flex text-white h-6 m-0 p-0'} loop={-1} behavior="scroll" direction="right" scrollamount="20">
            {stockInfo.map((stock, i)=>(
            <div key={i} class="inline-block font-bold h-fit">
                <span className='px-3'>{stock.bank_name}</span>
                <span className='px-3'>{stock.value}</span>
                <span className='text-red-500 px-5'>{stock.percent}%</span>
            </div>
            ))}
        </marquee>
    )
}
import ReactDOM from 'react-dom/client';

const string='Hello word';
const time= new Date().toLocaleTimeString();

const root=ReactDOM.createRoot(document.getElementById('root'));
const tick = () => {
    root.render(
        <div>
            <h1>{string}</h1>
            <p>{time}</p>
            <h4>Browser's details: {navigator.userAgent}</h4>
        </div>
    );
};
setInterval(tick,1000);

import React, {useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

function App(){
  const [amount,setAmount]=useState("2500");
  const [recipient,setRecipient]=useState("Ada Okafor");
  const [method,setMethod]=useState("Bank transfer");
  const [status,setStatus]=useState("");
  const valid=useMemo(()=>Number(amount)>0 && Number.isFinite(Number(amount)) && recipient.trim().length>1,[amount,recipient]);
  function submit(e){e.preventDefault();if(!valid)return;setStatus("Demo payment prepared. No money was sent.");}
  return <main className="page"><nav><a className="brand" href="/">◈ QuickPay</a><span className="demo">DEMO ENVIRONMENT</span></nav>
    <section className="layout"><div className="intro"><p className="eyebrow">SIMPLE · CLEAR · QUICK</p><h1>Payments,<br/><em>without the friction.</em></h1><p className="muted">A clean payment-flow prototype built with React. Review the details before confirming.</p><div className="trust"><span>✓ Clear fee breakdown</span><span>✓ Review before action</span><span>✓ No real payments</span></div></div>
    <form className="card" onSubmit={submit}><h2>Send money</h2><label>Recipient<input value={recipient} onChange={e=>{setRecipient(e.target.value);setStatus("");}} required /></label><label>Payment method<select value={method} onChange={e=>setMethod(e.target.value)}><option>Bank transfer</option><option>QuickPay balance</option><option>Debit card</option></select></label><label>Amount (NGN)<div className="amount-input"><span>₦</span><input type="number" min="1" step="0.01" value={amount} onChange={e=>{setAmount(e.target.value);setStatus("");}} required /></div></label><div className="breakdown"><span>Transfer amount</span><strong>{Number(amount||0).toLocaleString("en-NG",{style:"currency",currency:"NGN"})}</strong><span>Demo fee</span><strong>₦0.00</strong></div><button disabled={!valid}>Review demo payment</button>{status&&<p className="notice" role="status">{status}</p>}<p className="fine">This prototype does not connect to a payment processor or transfer funds.</p></form></section>
    <footer>QuickPay · Portfolio project · Simulated checkout only</footer></main>
}
createRoot(document.getElementById("root")).render(<App/>);
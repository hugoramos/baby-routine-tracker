import React from 'react';

import './BabyRoutineEvents.css';

export default class BabyRoutineEvent extends React.Component {

  constructor() {
    super();

    this.state = {
      events: [],
      loading: false
    }

  }

  componentDidMount(prevProps) {
  }

  renderSwitch(param) {
    switch (param) {
      case 1:
        return 'Dormiu';
      case 2:
        return 'Acordou';
      case 3:
        return 'Mamou';
      case 4:
        return 'Trocou a fralda';
      case 5:
        return 'Tomou banho';
      case 6:
        return 'Arrotou';
      case 7:
        return 'Remédio: ';
      default:
        return '-';
    }
  }

  getDayOfWeek(param) {
    switch (param) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda-feira';
      case 2:
        return 'Terça-feira';
      case 3:
        return 'Quarta-feira';
      case 4:
        return 'Quinta-feira';
      case 5:
        return 'Sexta-feira';
      case 6:
        return 'Sábado';
      default:
        return '-';
    }
  }

  render() {

    const InputEvent = (e) => {
      const eventtype = e.currentTarget.getAttribute("event-type")

      if (eventtype == 7) {
        var details = prompt("Qual medicação?");

        SendRequest(eventtype, details);
      }
      else {
        SendRequest(eventtype);
      }
    }

    const SendRequest = (eventtype, details) => {
      // fetch("https://dwwxbv4jf4.execute-api.us-east-1.amazonaws.com/prod/", {
      fetch("https://hugobetapi.trilogo.io/api/v1/events", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: eventtype,
          details: details
        })
      })
        .then(res => res.json())
        .then(
          (result) => {
            alert("Sucesso!");
            UpdateHistory();
          },
          (error) => {
            alert('Erro: ' + error)
          }
        )

    }

    const UpdateHistory = () => {
      console.log('UpdateHistory');
      // fetch(" https://dwwxbv4jf4.execute-api.us-east-1.amazonaws.com/prod", {
      fetch("https://hugobetapi.trilogo.io/api/v1/events", {
        method: 'GET',
      })
        .then(res => res.json())
        .then(
          (result) => {
            // this gives an object with dates as keys
            console.log(result);
            const groups = result.data.reduce((groups, event) => {

              const date = event.date.split('T')[0];
              const time = event.date.split('T')[1];

              const datetime = new Date(event.date.slice(0, -1));
              const details = event.details;

              const formatteddate = date.split('-')[2] + "/" + date.split('-')[1] + "/" + date.split('-')[0] + " (" + this.getDayOfWeek(datetime.getDay()) + ")";

              if (!groups[formatteddate]) {
                groups[formatteddate] = [];
              }
              groups[formatteddate].push({
                key: event.id,
                id: event.id,
                type: event.type,
                date: event.date,
                day: date,
                time: time.split(':')[0] + ":" + time.split(':')[1],
                details: details
              });

              return groups;
            }, {});

            this.setState({
              events: groups
            })

          },
          (error) => {
            alert('Erro: ' + error)
          }
        );

    }

    return (
      <div className="root">
        <div className="container">
          <div className="row noMargin">
            <div className="col one">
              <button className="b1" event-type="1" onClick={InputEvent}><h1>Dormiu 🌚</h1></button>
            </div>
            <div className="col two">
              <button className="b2" event-type="2" onClick={InputEvent}><h1>Acordou 🌞</h1></button>
            </div>
          </div>
          <div className="row noMargin">
            <div className="col three">
              <button className="b3" event-type="3" onClick={InputEvent}><h1>Mamou 🍼</h1></button>
            </div>
            <div className="col four">
              <button className="b6" event-type="6" onClick={InputEvent}><h1>Arrotou 🥴</h1></button>
            </div>
          </div>
          <div className="row noMargin">
            <div className="col four">
              <button className="b4" event-type="4" onClick={InputEvent}><h1>Trocou a fralda 💩</h1></button>
            </div>
            <div className="col three">
              <button className="b5" event-type="5" onClick={InputEvent}><h1>Tomou banho 🛁</h1></button>
            </div>
          </div>
          <div className="row noMargin">
            <div className="col four">
              <button className="b7" event-type="7" onClick={InputEvent}><h1>Remédio 💊</h1></button>
            </div>
          </div>
        </div>
        <div className="history" onClick={UpdateHistory}>
          <div className="history-content-title"><center><span>Últimas atividades</span></center></div>
          <div className="history-content">
            <div>
              {Object.keys(this.state.events).map(key =>
                <div key={key}>
                  <div>
                    <span><b>{key}</b></span>
                  </div>
                  {this.state.events[key].map(event => (
                    <div key={event.id}>
                      <span><span>{event.time}</span> - <b>{this.renderSwitch(event.type)} {event.details}</b></span>
                    </div>
                  ))}
                  <br />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }


}


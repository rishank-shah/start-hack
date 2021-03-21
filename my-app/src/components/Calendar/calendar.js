import React from 'react';
import { Card, Button } from 'react-bootstrap';
import cal from './calendar.png';

function calendar() {
  var gapi = window.gapi
  var CLIENT_ID = "566914486352-t33kd750n1g2mu5ut45b6948fg7v8c66.apps.googleusercontent.com"
  var API_KEY = "AIzaSyDWePF5Qs6Q0FDyzYVGF-WYsMclP7eMyCE"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        var event = {
          'summary': 'Awesome Event!',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'Really great refreshments',
          'start': {
            'dateTime': '2020-06-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2020-06-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })
      })
    })
  }

  return( 
    <Card style={{ width: '28rem', backgroundColor: 'lightblue', height: '25rem', display: 'flex', marginTop: '5rem', marginLeft: '35%', borderRadius: '25px', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Img variant="top" src={cal} style={{ width: '10rem', height: '10rem',marginTop: '2rem', borderRadius: '25px'}}/>
      <Card.Body>
        <Card.Title>Be Oriented</Card.Title>
        <Card.Text>
          Start adding your day to day events on Google Calendar, and stay Updated
        </Card.Text>
        <Button variant="primary" onClick={handleClick} style={{ textAlign: 'center', marginLeft: '9rem'}} >Add Event</Button>
      </Card.Body>
  </Card>
  )
}

export default calendar;
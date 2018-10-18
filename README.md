## React Frontend Application
<strong>Assignment:</strong> Create an application using a framework. The teacher gave us the framework we had to work with, in my case, it's the React Framework.

## How to install
Download the project files
navigate to the root folder
> $npm install

> $npm start

## Preview
![](https://github.com/jajan20/frontend-applications/blob/master/risk-preview.png?raw=true)

## Research
In these two weeks, we got the opportunity to help Arjen out with his risk calculation dashboard. A dashboard used to calculate the potential risk of children being placed into someone else's custody, due to harm or neglect.

When I opened the dashboard I quickly realized that it actually already does a good job of calculating the risk. But the user experience was not really good.
I decided that I wanted to enhance the user experience of the current app. In order to do that I had to figure out what was wrong with it and how I could do better.
A couple of things I noticed right away:

- Can't save data.
- Big lists (a lot of information right away).
- No forgiveness from the UI whenever a user makes a mistake.

After using it a couple of times I noticed a few other things:
- All the questions are predefined (not bad, just good to know).
- All the questions are inside a select menu, this means extra mouse clicks.
- There's so much information (cognitive overload).

## Concept
<strong>The Idea:</strong>
A simple app that helps users with advice and saving information about clients. By not letting the users worrie about when they need to fill it in, or overloading them with information I can make the experience more pleasureable. It's an assistant and should act that way, so that users can focus on the important parts.

I wanted to make an app which the users could use with just their smartphone. We had some feedback from the target audience in which they said:
- Usually, we don't use the dashboard/laptop at the first meeting because being digital can stand in the way of building trust with the client.
    - Which means they write down or remember everything and fill in the information at a later time.

- If the dashboard could help remind me what kind of questions need answering for the next meeting that would be a big help.

## Roadmap
- [x] Make it faster for users to select an answer.
- [ ] Save the information locally, if the user refreshes data isn't lost.
- [x] Separate the questions, return them in easier to read bits.
- [x] Redesign the dashboard
- [ ] Alerts/reminders when a question hasn't been answered yet. (Maybe hiding questions that have been answered)
- [x] Direct feedback for the user, not having to click on submit to get a calculated value.


## Challenges
React itself was a big challenge for me. Prior to this assignment, I haven't really used any sort of framework and it felt like I had to start at the very beginning.
The syntax was different, JSX was hard to wrap my head around. But in just a couple of days, I learned a lot about React.

---

### Stateless Function Component
Sometimes components will be so simple, that they will only do one thing. If you don't need any other methods inside your component except the render method we can use a stateless functions:

<strong>Stateless Function Component</strong>
```jsx
const Example = (props) => {
    return (
            <header>
                <h1>This will always be the same</h1>
            </header>
        )
}

export default Example
```
<strong>Full React Component (in which you can use more methods)</strong>
``` jsx
class Example extends React.Component {
    render() {
        return (
            <header>
                <h1>This will always be the same</h1>
            </header>
        )
    }
}

export default Example
```
For my project, I tried using both, but after refactoring my code a couple of times I don't have that many separate components.
The biggest aha moment is that inside the class component (inside the render method) you can refer to this. But with the stateless function there's no this and you can pass props.

---

### States vs Props
With a state, you can only access information that is available inside the component.

``` jsx
class AnotherExample extends React.Component {
    state = {
        name: "Jamie"
    }
    render() {
        return (
            <div>Hello {this.state.name}</div>
        )
    }
}
```

``` jsx
class AnotherExample extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}

<AnotherExample name="Jamie"/>
```

Props or properties we can pass to the component using attributes. Then we can access them inside the component.

---

### Constructor and Super
This concept is still really abstract for me. But as I understand it. Once you create a react component and you want to add your own methods you need the constructor and super otherwise the methods won't work.

```jsx
constructor(){
    super()
}
```

### ES6
- Arrowfunctions
- Classes

### className, htmlFor
In html you use attribrutes like class and for but since these are reserved inside javascript you need to use different names like className for class and htmlFor instead of for.

### Terminal
A lot of guides online start with the complete react libary and tools. create-react-app [name of project] will create a folder with everything you need to start building. This can be a bit overwhelming but you can always use the script tag with react libary directly inside your html.

### External Files
Using components turns out is quite easy, even importing CSS and JSON data is as easy as writing import data from './location of json'.

## Journal

### Maandag 8 oktober
- Introductie dag
- College Arjen met uitleg opdracht

### Dinsdag 9 oktober
- Gast sprekers verschillende frameworks (react, Vue, angular)
- Bootcamp JavaScript (Titus)
- Research naar framework
- Mailen van top 3

### Woensdag 10 oktober
- Bootcamp (Titus)
- 2e presentatie Arjen (verdieping)
- Vragen voor Arjen
- Kleine bootcamp (Laurens) local storage
- React installeren
- Tutorials React
- States and Props verwarring hoe werkt dit nou
- Klein JSON bestand samengesteld om mee te werken

### Donderdag 11 oktober
- React tutorials gevolgd
- Schetsen gemaakt voor opzet
- HTML prototype begonnen
- Onderzoek gedaan

### Vrijdag 12 oktober
- Tutorials React
- Titus gesprek
- Schetsen
- opzet met radiobuttons gemaakt

### Maandag 15 oktober
- Tutorial afgemaakt
- Begin gemaakt aan app (yarn install etc)
- Uitgezocht hoe je met nested objects werkt binnen array's.
- Verder aan project gewerkt

### Dinsdag 16 oktober
- Wes Bos tutorial over states and props gekeken.
- Geprobeerd de waarde van de data bij elkaar op te tellen en te renderen.
- Github en Git opgepakt en commits/push

### Woensdag 17 oktober
- Gastcollege over frameworks
- Wes Bos tutorial gekeken
- Waarde van data in de header gekregen (formule)
- Readme geschreven

### Donderdag 18 oktober
- Readme verder geschreven
- Form tutorials gelezen
- App verder afgemaakt

## Resources
- [Load JSON into ReactJS](http://4dev.tech/2017/12/how-to-load-a-json-file-in-reactjs/)
- [Learn ReactJS in 5min](https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4)
- [ReactJS](https://reactjs.org/tutorial/tutorial.html)
- [Beginners Guide to ReactJs](https://egghead.io/courses/the-beginner-s-guide-to-react)
- [How to use radiobuttons in ReactJS](https://stackoverflow.com/questions/27784212/how-to-use-radio-buttons-in-reactjs)
- [Creating a basic form with ReactJS](https://medium.com/@wlodarczyk_j/tutorial-creating-a-basic-form-with-redux-form-2f8cd51cd40)
- [Create a simple Todo App with ReactJS](https://scotch.io/tutorials/create-a-simple-to-do-app-with-react)
- [7 Radiobuttons Patterns by example](https://techblog.commercetools.com/seven-patterns-by-example-the-many-ways-to-type-radio-in-react-bfe14322bb6f)
- [Radiobuttons in ReactJS](http://react.tips/radio-buttons-in-reactjs/)
- [React forms using refs](https://css-tricks.com/react-forms-using-refs/)
- [Creating radiobuttons in React using Ref](https://stackoverflow.com/questions/33939850/creating-radio-button-in-react-using-ref)
- [Imperative guide to forms in React](https://blog.logrocket.com/an-imperative-guide-to-forms-in-react-927d9670170a)
- [Building forms using React](https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y)

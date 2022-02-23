import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
        <div>
           <header>
                <a href="#home">Home</a>
                <a href="#about">About</a>
           </header>
           <aside>
                <table>
                    <tr>
                        <td>USERS</td>
                     </tr>
                </table>
            </aside>
            <section>
                <table>
                    <tr>
                        <td>
                            <a href="http://youtube.com/watch?v=rCiBgLOcuKU">LINK</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://youtube.com/watch?v=OVT30pKPRuw">HOVER</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://instagram.com/direct/inbox">ACTIVE</a>
                        </td>
                    </tr>
                </table>
            </section>
        </div>
    )
  }
}

export default App;

/**
 * Created by Evhenii_Izotov on 2/1/2018.
 */
import React, {Component} from 'react'

import './main.css'

import ProgressBar from './../../components/progressBar'
import CategoriesConteainer from './../../components/categoriesContainer'
import TasksConteainer from './../../components/tasksContainer'
import ModalContainer from './../../components/modal'

class MainPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return <div>
            <main>
                <ProgressBar />
                <div className="main-content">
                    <CategoriesConteainer />
                    <TasksConteainer />
                    <ModalContainer />
                </div>
            </main>
        </div>            
    }
}

export default MainPage
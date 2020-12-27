import { React } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './globalContext';



export default class GlobalProvider extends React.PureComponent {

    PropTypes = {
        children: PropTypes.element.isRequired
    }

    constructor() {
        super();

        this.state = {
            cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            }
        };
    }

    render() {

        const { cars } = this.state;
        const { children } = this.props;

        return (
          <GlobalContext.Provider
            value={{
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const bigCars = { ...cars};
                        cars[selectedID].price += 1;
                        this.setState({
                            cars: bigCars
                        });
                    },
                    decrementPrice: selectedID => {
                        const bigCars = { ...cars};
                        bigCars[selectedID].price -= 1;
                        this.setState({
                            cars: bigCars
                        });
                    }
                }}
          >
            {children}
          </GlobalContext.Provider>
        );
    }
}
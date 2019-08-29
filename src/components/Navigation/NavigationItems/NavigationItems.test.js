import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()}); //connects enzyme, which allows for unit testing.

describe('<NavigationItems />', () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<NavigationItems />); //shallow allows just the navigation items component to be rendered, with placeholders for subcomponents.
    });
    
    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
        //we dont need to specify that isAuthenticated is false because we aren't passing any props here due to shallow. isAuthenticated will by default be false.
    });
    it('should render three <NavigationItem /> elements if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it('should render a logout <NavigationItem /> element if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    });
});

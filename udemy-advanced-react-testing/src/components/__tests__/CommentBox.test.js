import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

describe('text area', () => {

    beforeEach(() => { 
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        })
        
        wrapped.update()
    })

    it('has a textarea allows text to be input', () => {     
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })
    
    it('should when text submitted the text area is emptied', () => {
        wrapped.find('form').simulate('submit')
        
        wrapped.update()

        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})
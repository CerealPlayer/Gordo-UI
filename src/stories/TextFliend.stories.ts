import { Meta, StoryObj } from '@storybook/react'
import TextField from './TextField'
const meta = {
  component: TextField,
  title: 'GordoUI/TextField',
  tags: ['autodogs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    label: 'hola',
    classes: {labelClassName:'bg-blue-200', inputClassName:'bg-yellow-200'}
  },
}
export const secondary: Story={
  args:{
    label:'hola ramonchu',
    type: 'password',
    classes:{inputClassName:'bg-red-500'}
  }
}
export const sinFondo: Story={
  args:{
    label:'sin nada de fondo',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  }
}
export const numeros: Story={
  args:{
    type:'number',
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  }
}
export const autoFocus: Story={
  args:{
    type:'text',
    autoFocus: true,
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  }
}
export const Error: Story={
  args:{
    type:'text',
    label:'Error',
    error:true,
    onChange(ev) {
      console.log(ev.currentTarget.value)
    },
  }
}

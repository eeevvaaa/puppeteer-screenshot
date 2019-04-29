import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'name-component',
  styleUrl: 'name-component.scss'
})
export class NameComponent {
  /**
   * Name property
   *
   * @type {string}
   * @memberof NameComponent
   */
  @Prop() name: string;

  render() {
    return <p>My name is {this.name}</p>;
  }
}

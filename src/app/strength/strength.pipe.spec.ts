/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StrengthPipe } from './strength.pipe';

describe('Pipe: Strength', () => {

  // Weak Strength
  it('should display weak if strength is less than 5', () => {
    //arrange
    const pipe = new StrengthPipe();

    //act
    var result = pipe.transform(5);

    //assert
    expect(result).toEqual('5 (weak)');
  });

  // Strong Strength
  it('should display strong if strength is more than 10 but less than 20', () => {

    //arrange
    const pipe = new StrengthPipe();

    //act
    var result = pipe.transform(15);

    //assert
    expect(result).toEqual('15 (strong)');
  });

  // Unbelievable Strength
  it('should display unbelievable if strength is more than 20', () => {
    //arrange
    const pipe = new StrengthPipe();

    //act
    var result = pipe.transform(25);

    //assert
    expect(result).toEqual('25 (unbelievable)');
  });

  it('create an instance', () => {
    let pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });
});

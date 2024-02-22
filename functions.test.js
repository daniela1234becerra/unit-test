const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
      const x= 2;
      const y= 1;
    //ACT
      const result = functions.multiply(x,y);
    //ASSERT
      expect(result).toBe(2)
  })

  it('should return 0 when we subtract result with FinalResult', () =>{
    //ARRANGE
    const x= 4;
    const y= 1;
  //ACT
    const result = functions.multiply(x,y);
    const finalResult = result;
  //ASSERT
    expect(result-finalResult).toBe(0)
  })

  it('should be pair, if we divide it in 2 the result should be 1', () => {
    //ARRANGE
      const x= 2;
      const y= 1;
    //ACT
      const result = functions.multiply(x,y);
    //ASSERT
      expect(result/2).toBe(1)
  })

  it('should return a number', () => {
    //ARRANGE
      const x= 2;
      const y= 1;
    //ACT
      const result = functions.multiply(x,y);
    //ASSERT
    expect(result).toEqual(expect.any(Number));
  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE
    
    //ACT
    const result = functions.isNull();
    //ASSERT
    expect(result).toBeNull()
  });

  it('should be return name as null', () => {
    //ARRANGE
    const nombre = '';
    //ACT
    const result = functions.isNull(nombre);
    //ASSERT
    expect(result).toBeNull()
  });

  it('should be return null', () => {
    //ARRANGE
    const pais = '';
    const indicador = '';
    //ACT
    const result = functions.isNull(pais, indicador);
    //ASSERT
    expect(result).toBeNull()
  });
});


describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const rolAdmin = true;
    //ACT
    const result = functions.checkTruthy(rolAdmin);

    //ASSERT
    expect(result).toBe(true)
  });

  it('should be return true when compare values of suma and result1', () => {
    //ARRANGE
    const suma = 2+1;
    const result1 = 3;
    const verification = suma === result1;
    //ACT
    const result = functions.checkTruthy(verification);

    //ASSERT
    expect(result).toBe(true)
  });

  it('should be return true when contraseña equal to string', () => {
    //ARRANGE
    const contraseña = 'C1234';
    const type = typeof contraseña === 'string';
    
    //ACT
    const result = functions.checkTruthy(type);

    //ASSERT
    expect(result).toBe(true)
  });
})


describe('addLastName function', () => {
  it('should be return Pepito Ramirez when I sent Ramirez', () => {
    //ARRANGE
    const lastname = 'Ramirez'
    //ACT
    const result = functions.addLastName(lastname)
    //ASSERT
    expect(result.lastname).toBe('Ramirez');
    });
  })

  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastname = 'Perez'
    //ACT
    const result = functions.addLastName(lastname)
    //ASSERT
    expect(result).toEqual({
      firstname: 'Pepito',
      lastname: 'Perez'
    })
  });
  

const { assert } = require("chai")
const { ethers } = require("hardhat") 

describe("SimpleStorage",function () {
  let simpleStorageFactory,simpleStorage
  beforeEach(async function(){
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })
  it("Should Start with Zero", async function(){
      const retreivevalue = await simpleStorage.retrieve()
      const expectedvalue  = 0
      assert.equal(retreivevalue,expectedvalue)
  })

  it("Should update fav number to 7", async function(){
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const retreivevalue = await simpleStorage.retrieve()
    const expectedvalue  = 7
    assert.equal(retreivevalue,expectedvalue)
  })
  it("Should get for shafi 10 ", async function(){
    const transactionResponse = await simpleStorage.addPerson("shafi",10)
    await transactionResponse.wait(1)
    const retreivevalue = await simpleStorage.retrievePersonFav("shafi")
    const expectedvalue  = 10
    assert.equal(retreivevalue,expectedvalue)
  })
})
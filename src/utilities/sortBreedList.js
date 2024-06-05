import dogCharacteristics from "../data/dogCharacteristics.js"
import hypoallergenicDogBreeds from "../data/hypoallergenicDogBreeds.js"

export default function calculateBreedScores( { dogBreeds, userResponse } ) {
    return dogBreeds.map(breed => {
        let score = 0;
        let weight = parseInt(breed.weight.imperial.split(' - ')[1]);

        // INTRO - HANDLE AGE RESPONSE
        if (Number(userResponse.intro.age) >= 60) { 
          { score += weight < 50 ? 5000 : -500 }
          if (breed.breed_group && breed.breed_group.toLowerCase() === "toy") { score += 50 }
          if (breed.bred_for && breed.bred_for.includes("lapdog")) { score += 50 }

          dogCharacteristics.calm.forEach(characteristic => { if (breed.temperament && breed.temperament.includes(characteristic)) { score += 25 }});
          dogCharacteristics.compassionate.forEach(characteristic => { if (breed.temperament && breed.temperament.includes(characteristic)) { score += 25 }});
          dogCharacteristics.catLike.forEach(characteristic =>{ if (breed.temperament && breed.temperament.includes(characteristic)) { score -= 10 }});
          dogCharacteristics.active.forEach(characteristic => { if (breed.temperament && breed.temperament.includes(characteristic)) { score -= 5 }});
        }

        // HOME - HANDLE DDWELLING RESPONSE
        switch (userResponse.homeInfo.dwelling) {
            case 'TNHS':
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 10 });
              break;
            case 'HS':
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'sporting') score += 10;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'mixed') score += 5;
              break;
            case 'ACSM':
              if (weight <= 40) score += 50;
              else if (weight > 40 && weight <= 60) score += 10;
              else if (weight > 80) score -= 50;
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 25 });
              break;
            case 'ACLG':
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 10 });
              break;
            case 'MHRV':
              dogCharacteristics.brave.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.curious.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.protective.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              break;
            case 'TYHS':
              if (weight <= 40) score += 50;
              else if (weight > 40 && weight <= 60) score += 25;
              else if (weight > 80) score -= 50;
              dogCharacteristics.active.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 50 });
              break;
            default:
              break;
          }

        // HOME - HANDLE ENVIRONMENT RESPONSE
        switch (userResponse.homeInfo.environment) {
            case 'RR':
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'working') score += 500;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'herding') score += 500;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'hound') score += 50;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'sporting') score += 50;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'terrier') score += 50;
              dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.brave.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.hardworking.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.active.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.sensitive.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 100 });
              break;    
            case 'CU':
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'terrier') score += 250;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'toy') score += 250;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'mixed') score += 10;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'non-sporting') score += 10;
              dogCharacteristics.brave.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.independent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              dogCharacteristics.sensitive.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 50 });
              break;
            case 'SB':
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'sporting') score += 10;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'non-sporting') score += 10;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'toy') score += 10;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'mixed') score += 10;
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
              break;
            default:
              break;
          }

        // HOME - HANDLE SIZE RESTRICTION RESPONSE
        if (userResponse.homeInfo.sizeRestriction.yesNo === 'Yes' && userResponse.homeInfo.maxWeight) {
          score += weight < userResponse.homeInfo.maxWeight ? 5000 : -5000
          }

        // HOUSEHOLD/FAMILY - HANDLE HOUSEHOLD SIZE RESPONSE
        if (userResponse.household.quantity < 3) {
            dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 250 });
            dogCharacteristics.protective.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 250 });
            dogCharacteristics.affectionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 250 });
            dogCharacteristics.independent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 500 });
            dogCharacteristics.catLike.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          }

        // HOUSEHOLD/FAMILY - HANDLE YOUNG CHILDREN RESPONSE
        if (userResponse.household.youngChildren === 'Yes') {
          dogCharacteristics.compassionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 250 });
          dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 250 });
          dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 250 });
          dogCharacteristics.playful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.cheerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.active.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 10 });
          dogCharacteristics.sensitive.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 250 });
          if (breed.breed_group && breed.breed_group.toLowerCase() === 'terrier') score -= 50;
        }

        // HOUSEHOLD/FAMILY - HANDLE ALLERGIES RESPONSE
        if (userResponse.household.allergies === 'Yes') {
            hypoallergenicDogBreeds.forEach(el => { score += breed.name.toLowerCase() === el.toLowerCase() ? 5000 : -5000 });
        }

        // HOUSEHOLD/FAMILY - HANDLE OTHER ANIMALS RESPONSE
        if (userResponse.household.otherPets.dog) {
            dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
            dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 50 });
        }   
        if (userResponse.household.otherPets.cat) {
            dogCharacteristics.compassionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 200 });
            dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 100 });
            dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
            dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 300 });
        }
        if (userResponse.household.otherPets.bird) {
            dogCharacteristics.catLike.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 100 });
            if (breed.breed_group && ['sporting', 'hunting', 'terrier', 'hound'].includes(breed.breed_group.toLowerCase())) score -= 50;
            if (breed.breed_group && ['bird', 'hunt'].some(el => breed.bred_for && breed.bred_for.includes(el))) score -= 100;
        }
        if (userResponse.household.otherPets.rodent) {
            dogCharacteristics.catLike.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 500 });
            if (breed.breed_group && ['sporting', 'hunting', 'terrier', 'hound'].includes(breed.breed_group.toLowerCase())) score -= 500;
            if (breed.breed_group && ['rodent', 'vermin', 'hunt'].some(el => breed.bred_for && breed.bred_for.includes(el))) score -= 500;
        }
        if (userResponse.household.otherPets.livestock) {
          dogCharacteristics.protective.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 100 });
          dogCharacteristics.hardworking.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 100 });
          dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
          dogCharacteristics.brave.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
          dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
          dogCharacteristics.independent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
          if (breed.breed_group && ['working', 'herding'].includes(breed.breed_group.toLowerCase())) score += 100;
          if (breed.bred_for && breed.bred_for.includes('guard')) score += 100;
        }
        if (userResponse.household.otherPets.other) {
          dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.compassionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
          dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
        }

        //EXPERIENCE - HANDLE PAST DOGS RESPONSE
        if (userResponse.experience.pastDogs === 0) { 
          dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 300 });
          dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 200 });
          dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 200 });
          if (breed.breed_group && breed.breed_group.toLowerCase() === "toy") { score += 50 };
          if (breed.breed_group && ['working', 'herding'].includes(breed.breed_group.toLowerCase())) score -= 100;
        }
        if (0 < userResponse.experience.pastDogs < 3) {
          dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 150 });
          dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
          dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 25 });
          dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 100 });
          dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 100 });

          if (breed.breed_group && breed.breed_group.toLowerCase() === "toy") { score += 25 };
          if (breed.breed_group && ['working', 'herding'].includes(breed.breed_group.toLowerCase())) score -= 50;
        }

        //EXPERIENCE - HANDLE TRAINING ABILITY RESPONSE
        if (userResponse.experience.trainingAbility === "none") { 
          dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 600 });
          dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 200 });
          dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 200 });
          dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 200 });
          dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 200 });

          if (breed.breed_group && breed.breed_group.toLowerCase() === "toy") { score += 200 };
          if (breed.breed_group && ['working', 'herding'].includes(breed.breed_group.toLowerCase())) score -= 400;
        }
        if (userResponse.experience.trainingAbility === "beginner") {
          dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 300 });
          dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 100 });
          dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 100 });
          dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 100 });
          dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 100 });

          if (breed.breed_group && breed.breed_group.toLowerCase() === "toy") { score += 100 };
          if (breed.breed_group && ['working', 'herding'].includes(breed.breed_group.toLowerCase())) score -= 200;
        }
        if (userResponse.experience.trainingAbility === "intermediate") {
          dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 150 });
          dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 50 });
          dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 50 });
          dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 50 });

          if (breed.breed_group && breed.breed_group.toLowerCase() === "toy") { score += 50 };
          if (breed.breed_group && ['working', 'herding'].includes(breed.breed_group.toLowerCase())) score -= 100;
        }

        // PERFECT PUP - HANDLE PERFECT PUP RESPONSE
        if(userResponse.perfectPup.mostDesiredTrait) {
          Object.keys(dogCharacteristics).map( el => {
            if (el.toLowerCase() === userResponse.perfectPup.mostDesiredTrait.toLowerCase()) {
              dogCharacteristics[el].forEach( char => {if (breed.temperament && breed.temperament.includes(char)) score += 1000} )
            }})
        }

        return { ...breed, score };
    });
}

import dogCharacteristics from "../data/dogCharacteristics.js"
import hypoallergenicDogBreeds from "../data/hypoallergenicDogBreeds.js"

export default function calculateBreedScores( { dogBreeds, userResponse } ) {
    return dogBreeds.map(breed => {
        let score = 0;
        let weight = Number(breed.weight.imperial.split(' - ')[0]);

        // INTRO - HANDLE AGE RESPONSE
        if (userResponse.intro.age >= 60) { score += weight < userResponse.homeInfo.sizeRestriction.maxWeight ? 1 : -1 }
        if (breed.breed_group && breed.breed_group.toLowerCase() === "toy") { score += 1 }
        if (breed.bred_for && breed.bred_for.includes("lapdog")) { score += 1 }

        dogCharacteristics.calm.forEach(characteristic => { if (breed.temperament && breed.temperament.includes(characteristic)) { score += 1 }});
        dogCharacteristics.compassionate.forEach(characteristic => { if (breed.temperament && breed.temperament.includes(characteristic)) { score += 1 }});
        dogCharacteristics.catLike.forEach(characteristic =>{ if (breed.temperament && breed.temperament.includes(characteristic)) { score -= 1 }});
        dogCharacteristics.active.forEach(characteristic => { if (breed.temperament && breed.temperament.includes(characteristic)) { score -= 1 }});

        // HOME - HANDLE DDWELLING RESPONSE
        switch (userResponse.homeInfo.dwelling) {
            case 'TNHS':
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
              break;
            case 'HS':
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'sporting') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'mixed') score += 1;
              break;
            case 'ACSM':
              if (weight <= 40) score += 2;
              else if (weight > 40 && weight <= 60) score += 1;
              else if (weight > 80) score -= 1;
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
              break;
            case 'ACLG':
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
              break;
            case 'MHRV':
              dogCharacteristics.brave.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.curious.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.protective.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              break;
            case 'TYHS':
              if (weight <= 40) score += 2;
              else if (weight > 40 && weight <= 60) score += 1;
              else if (weight > 80) score -= 1;
              dogCharacteristics.active.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
              break;
            default:
              break;
          }


        // HOME - HANDLE ENVIRONMENT RESPONSE
        switch (userResponse.homeInfo.environment) {
            case 'RR':
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'working') score += 2;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'terrier') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'herding') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'hound') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'sporting') score += 1;
              dogCharacteristics.intelligent.forEach(el => { if (breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.brave.forEach(el => { if (breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.hardworking.forEach(el => { if (breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.powerful.forEach(el => { if (breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.active.forEach(el => { if (breed.temperament.includes(el)) score += 1 });
              break;    
            case 'CU':
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'terrier') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'mixed') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'non-sporting') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'toy') score += 1;
              dogCharacteristics.brave.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.independent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              dogCharacteristics.sensitive.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
              break;
            case 'SB':
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'sporting') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'non-sporting') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'toy') score += 1;
              if (breed.breed_group && breed.breed_group.toLowerCase() === 'mixed') score += 1;
              dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
              break;
            default:
              break;
          }

        // HOME - HANDLE SIZE RESTRICTION RESPONSE
        if (userResponse.homeInfo.sizeRestriction === 'Yes' && userResponse.homeInfo.maxWeight) {
            if (weight < userResponse.homeInfo.maxWeight) score += 1;
            else score -= 200;
          }

        // HOUSEHOLD/FAMILY - HANDLE HOUSEHOLD SIZE RESPONSE
        if (userResponse.household.quantity < 3) {
            dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.protective.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.affectionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.independent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 2 });
            dogCharacteristics.catLike.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
          }

        // HOUSEHOLD/FAMILY - HANDLE YOUNG CHILDREN RESPONSE
        if (userResponse.household.youngChildren === 'Yes') {
            dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.playful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.cheerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.compassionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.active.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.sensitive.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
            if (breed.breed_group && breed.breed_group.toLowerCase() === 'terrier') score -= 1;
        }

        // HOUSEHOLD/FAMILY - HANDLE ALLERGIES RESPONSE
        if (userResponse.household.allergies === 'Yes') {
            hypoallergenicDogBreeds.forEach(el => { if (breed.name.toLowerCase() === el.toLowerCase()) score += 200 });
        }

        // HOUSEHOLD/FAMILY - HANDLE OTHER ANIMALS RESPONSE
        if (userResponse.household.otherPets.dog) {
            dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
        }   
        if (userResponse.household.otherPets.cat) {
            dogCharacteristics.compassionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.feisty.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
        }
        if (userResponse.household.otherPets.bird) {
            dogCharacteristics.catLike.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
            if (['sporting', 'hunting', 'terrier', 'hound'].includes(breed.breed_group.toLowerCase())) score -= 1;
            if (['bird', 'hunt'].some(el => breed.bred_for.includes(el))) score -= 1;
        }
        if (userResponse.household.otherPets.rodent) {
            dogCharacteristics.catLike.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score -= 1 });
            if (['sporting', 'hunting', 'terrier', 'hound'].includes(breed.breed_group.toLowerCase())) score -= 1;
            if (['rodent', 'vermin', 'hunt'].some(el => breed.bred_for.includes(el))) score -= 1;
        }
        if (userResponse.household.otherPets.livestock) {
            dogCharacteristics.intelligent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.brave.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.hardworking.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.powerful.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.loyal.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.independent.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            dogCharacteristics.protective.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
            if (['working', 'herding'].includes(breed.breed_group.toLowerCase())) score += 2;
            if (breed.bred_for.includes('guard')) score += 1;
        }
        if (userResponse.household.otherPets.other) {
        dogCharacteristics.compassionate.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
        dogCharacteristics.friendly.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
        dogCharacteristics.calm.forEach(el => { if (breed.temperament && breed.temperament.includes(el)) score += 1 });
        }

        //EXPERIENCE - HANDLE PAST DOGS RESPONSE
        //EXPERIENCE - HANDLE TRAINING ABILITY RESPONSE

        // PERFECT PUP - HANDLE PERFECT PUP RESPONSE

        return { ...breed, score };
    });
}

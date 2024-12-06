import React from 'react';
import { X } from 'lucide-react';
import { Pokemon } from '../types/pokemon';

interface PokemonDetailProps {
  pokemon: Pokemon | null;
  onClose: () => void;
}

export function PokemonDetail({ pokemon, onClose }: PokemonDetailProps) {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <img
            src={pokemon.sprite}
            alt={pokemon.name}
            className="w-48 h-48 mx-auto"
          />
          <h2 className="text-2xl font-bold capitalize mt-4">{pokemon.name}</h2>
          <p className="text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Stats</h3>
          <div className="space-y-2">
            {Object.entries(pokemon.stats).map(([stat, value]) => (
              <div key={stat} className="flex items-center">
                <span className="w-32 text-sm capitalize">
                  {stat.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: `${(value / 255) * 100}%` }}
                  />
                </div>
                <span className="ml-2 text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
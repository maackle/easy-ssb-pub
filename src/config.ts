/*
easy-ssb-pub: an easy way to deploy a Secure Scuttlebutt Pub.

Copyright (C) 2017 Andre 'Staltz' Medeiros (staltz.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import createDebug = require('debug');

const pkg = require('../package.json');

export const debug = createDebug(pkg.name);
export const version = pkg.version;
export const HTTP_PORT = 80;
export const SBOT_PORT = 8008;
export const MAX_CONNECTED_PUBS = 3;
export const SWARM_PORT = 8007;
export const SWARM_ID_PREFIX = 'easy-ssb-pub@';
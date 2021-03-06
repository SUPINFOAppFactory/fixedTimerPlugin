describe('Unit: fixedTimerPluginWidget: Services', function () {
    beforeEach(module('fixedTimerPluginWidget'));


  describe('Unit : Buildfire service', function () {
    var Buildfire;
    beforeEach(inject(
        function (_Buildfire_) {
          Buildfire = _Buildfire_;
        }));
    it('Buildfire should exists', function () {
      expect(Buildfire).toBeDefined();
    });
  });

  describe('Unit : DataStore Factory', function () {
    var DataStore, Buildfire, STATUS_MESSAGES, STATUS_CODE, q, TAG_NAMES, $rootScope;
      beforeEach(module('fixedTimerPluginWidget', function ($provide) {
          $provide.service('Buildfire', function () {
              this.datastore = jasmine.createSpyObj('datastore', ['get', 'search', 'onUpdate', 'save']);
              this.datastore.get.and.callFake(function (_tagName, callback) {
                  if (_tagName) {
                      callback(null, 'Success');
                  } else {
                      callback('Error', null);
                  }
              });
              this.datastore.save.and.callFake(function (item, _tagName, callback) {
                  if (item, _tagName) {
                      callback(null, 'Success');
                  } else {
                      callback('Error', null);
                  }
              });
              this.datastore.search.and.callFake(function (item, _tagName, callback) {
                  if (item, _tagName) {
                      callback(null, 'Success');
                  } else {
                      callback('Error', null);
                  }
              });

              this.datastore.onUpdate.and.callFake(function (callback) {

                      callback(null, 'Success');


              });
          });
      }));
    beforeEach(module('fixedTimerPluginWidget'));
    beforeEach(inject(function (_DataStore_, _STATUS_CODE_, _STATUS_MESSAGES_, _TAG_NAMES_, _$rootScope_) {
      DataStore = _DataStore_;
      STATUS_CODE = _STATUS_CODE_;
      STATUS_MESSAGES = _STATUS_MESSAGES_;
      TAG_NAMES = _TAG_NAMES_;
      $rootScope = _$rootScope_;
      Buildfire = {
        datastore: {}
      };


    }));
  it('DataStore should exist and be an object', function () {
    expect(typeof DataStore).toEqual('object');
  });
  it('DataStore.get should exist and be a function', function () {
    expect(typeof DataStore.get).toEqual('function');
  });
  it('DataStore.save should exist and be a function', function () {
    expect(typeof DataStore.save).toEqual('function');
  });

    it('DataStore.get should return error', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.get(null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Error');
    });
    it('DataStore.get should return success', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.get(TAG_NAMES.TIMER_INFO).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Success');
    });

    it('DataStore.save should return error', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.save( null,null, null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Error');
    });

    it('DataStore.save should return success', function () {
      var result = ''
          , success = function (response) {
            result = response;
          }
          , error = function (err) {
            result = err;
          };
      DataStore.save( 123, TAG_NAMES.TIMER_INFO, null).then(success, error);
      $rootScope.$digest();
      expect(result).toEqual('Success');
    });

      it('DataStore.onUpdate should return error', function () {
          var result = ''
              , success = function (response) {
                  result = response;
              }
              , error = function (err) {
                  result = err;
              };
          DataStore.onUpdate().then(success, error);
          $rootScope.$digest();
          expect(result).toEqual('');
      });

      it('DataStore.search should return success', function () {
          var result = ''
              , success = function (response) {
                  result = response;
              }
              , error = function (err) {
                  result = err;
              };
          DataStore.search( {}, TAG_NAMES.TIMER_INFO, null).then(success, error);
          $rootScope.$digest();
          expect(result).toEqual('Success');
      });

      it('DataStore.search should return error', function () {
          var result = ''
              , success = function (response) {
                  result = response;
              }
              , error = function (err) {
                  result = err;
              };
          DataStore.search( null,null, null).then(success, error);
          $rootScope.$digest();
          expect(result).toEqual('Error');
      });
  })
    describe('Unit : Location Factory', function () {
        var Location, $location, $rootScope;
        beforeEach(module('fixedTimerPluginWidget'));
        beforeEach(inject(function (_$rootScope_, _$window_, _Location_) {
            Location = _Location_;
            $rootScope = _$rootScope_;
            $window = _$window_;
        }));
        describe('Units should be defined', function () {
            it('Location should exist and be an object', function () {
                expect(typeof Location).toEqual('object');
            });
            it('Location.goTo should exist and be a function', function () {
                expect(typeof Location.goTo).toEqual('function');
            });
            it('Location.goTo should exist and be a function', function () {
                Location.goTo('#/item');
                $rootScope.$digest();
                expect($window.location.hash).toEqual('#/item');
            });
        });
    });

});